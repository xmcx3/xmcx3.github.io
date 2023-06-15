import {useRef, useEffect, useMemo, useState} from 'react'

import * as d3 from 'd3';
import { getUserProfileCalendar } from '../../api/leetcode';


const convertDateToPos = (date) => {
  const monthOffset = date.getMonth();
  const yearOffset = date.getYear();
  const year = date.getFullYear();
  const dayOffset = date.getDay();
  const dateOffset = date.getDate();
  const firstDayInMonth = new Date(year, monthOffset, 1);
  const x = (yearOffset * 12 + monthOffset) * 8 + dayOffset;
  const y = Math.floor((dateOffset + firstDayInMonth.getDay() - 1) / 7);

  return [x, y];
};

const getDayTs = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth(); const d = date.getDate();

  return new Date(year, month, d).getTime();
};

class Source {
  constructor(month = 3) {
    const now = new Date();
    const stop = new Date(now.getFullYear(), now.getMonth() + 1)
    const start = d3.timeMonth.offset(stop, - month);
    const days = d3.timeDays(start, stop);
    this.datas = new Map(days.map((v) => [Math.floor(getDayTs(v) / 1000), 0]));
  }

  get data() {
    return Array.from(this.datas.entries()).map(([ts, v]) => {
      const date = new Date(parseInt(ts) * 1000);
      return [...convertDateToPos(date), v];
    });
  }

  update(datas = []) {
    datas.forEach(([key, value]) => {
      const date = new Date(parseInt(key) * 1000);
      const k = Math.floor(getDayTs(date) / 1000)
      if(this.datas.has(k)) {
        this.datas.set(k, value);
      }
    });
  }

  get range() {
    const data = this.data;
    return {
      x: {
        max: d3.max(data, (v) => v[0]),
        min: d3.min(data, (v) => v[0]),
      },
      y: {
        max: d3.max(data, (v) => v[1]),
        min: d3.min(data, (v) => v[1]),
      }
    }
  }
}

const useD3Graph = (source) => {
  const ref = useRef(null)
  const [svg, setSvg] = useState(null)
  const width = (source.range.x.max + 1 - source.range.x.min) * 20
  const height = (source.range.y.max + 1 - source.range.y.min) * 20

  const x = d3
        .scalePoint()
        .domain(d3.range(source.range.x.min, source.range.x.max + 1))
        .range([0, width])
        .padding(1)

  const y = d3
        .scalePoint()
        .domain(d3.range(source.range.y.min, source.range.y.max + 1))
        .range([0, height])
        .padding(1)

  useEffect(() => {
    const svg = d3.select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr("viewBox", `0 0 ${width} ${height}`)
    setSvg(svg)
    return  () => svg.remove()
  }, [])

  const colorMap = (v) => {
    const colors = d3.quantize(d3.interpolateHcl('#19A7CE', '#000000'), 4)
    const colorsExt = ['#F6F1F1', ...colors]
    const ind = Math.ceil(v / 5)
    return colorsExt[ind >= 5 ? 4 : ind]
  }

  const updateSvg = (data) => {
    svg?.selectAll('rect')
      .data(data)
      .join('rect')
      .attr("x", ([a, _]) => x(a))
      .attr("y", ([_, b]) => y(b))
      .attr("width", 12)
      .attr("height", 12)
      .attr("rx", 2)
      .attr("fill", d => colorMap(d[2]))
  }
  return [svg, ref, updateSvg]
}

const CodeStastic = ({month = 4, className}) => {
  const source = useMemo(() => {
    return new Source(month);
  }, [month])


  const [svg, ref, renderData] = useD3Graph(source)
  useEffect(() => {
    const fetchData = async () => {
      const { data: { userCalendar }} = await getUserProfileCalendar();
      const { submissionCalendar } = userCalendar || ''
      const calendarData = submissionCalendar === undefined ? [] : JSON.parse(submissionCalendar)
      const datasSeq = Object.keys(calendarData).map(key => [key, calendarData[key]])
      source.update(datasSeq)
      renderData(source.data)
    }
    renderData(source.data)
    fetchData()
  }, [source.data])

  return (<div className={`w-full text-gray flex items-center ${className}`} ref={ref} />)
}

export default CodeStastic
