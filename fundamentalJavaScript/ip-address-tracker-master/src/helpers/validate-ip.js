export function validateIp(ip) {
  if(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(ip)){
    return true
  }
  alert('You have to enter a valid IP address')
  return false
}