const getUserProfileCalendar = async () => {
  try {
    const res = await fetch('https://cors-anywhere-63h7.onrender.com/https://leetcode.cn/graphql/noj-go', {
      method: 'POST',
      mode: 'cors',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        query: `
    query userProfileCalendar($userSlug: String!, $year: Int) {
      userCalendar(userSlug: $userSlug, year: $year) {
        submissionCalendar
      }
    }
  `,
        variables: {
          userSlug: 'xmcccccc',
        },
        operationName: 'userProfileCalendar',
      })
    });
    return res.json()
  } catch (e) {
    return {data: {}}
  }

}

export {
  getUserProfileCalendar
}
