function formatBuild(builds, key = '', temp, index = 0) {
  //   如果是数组，则进行
  if (Array.isArray(builds)) {
    for (const buildItem of builds) {
      formatBuild(buildItem, '', temp, index++)
    }
  } else if (typeof builds === 'string' || typeof builds === 'number') {
    if (key === 'roomNo') {
      temp[index].label = builds
    } else {
      temp.push({
        label: builds,
        value: builds,
        children: [],
      })
    }
  } else {
    for (const buildKey in builds) {
      if (
        typeof builds[buildKey] === 'string' ||
        typeof builds[buildKey] === 'number'
      ) {
        if (buildKey === 'roomNo') {
          formatBuild(builds[buildKey], 'roomNo', temp, index)
        } else {
          formatBuild(builds[buildKey], '', temp, index)
        }
      } else if (
        typeof builds[buildKey] === 'object' &&
        buildKey !== 'students'
      ) {
        formatBuild(builds[buildKey], '', temp[index].children)
      } else {
        return
      }
    }
  }
}

export default formatBuild
