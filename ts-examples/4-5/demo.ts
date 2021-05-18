{
  enum STATUS {
    OFFLINE,
    ONLINE,
    DELETED
  }

  // const STATUS = {
  //   OFFLINE: 0,
  //   ONLINE: 1,
  //   DELETED: 2
  // }

  function getResult(status) {
    if (status === STATUS.OFFLINE) {
      return 'offline'
    } else if (status === STATUS.ONLINE) {
      return 'online'
    } else if (status === STATUS.DELETED) {
    }
    return 'error'
  }

  const result = getResult(STATUS.OFFLINE)
  console.log(result)
}