function getCookie (name) {
  if (typeof window === 'undefined') {
    return null
  }
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr) {
    return (arr[2])
  }
  return null
}
export const browser = function() {
  let e = navigator.userAgent
  let v = e.match()
  console.log('navigator.userAgent:', navigator.userAgent)
  return {
    isApp: !!getCookie('jdqSDK') || !!e.match(/JieDianQian\/\d+\.\d+/) || !!e.match(/DKDS/),
    isWeixin: !!e.match(/MicroMessenger/)
  }
}
