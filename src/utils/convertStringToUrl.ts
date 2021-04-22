export function convertStringToUrl(txt: string): string {

  if (txt === undefined || txt.length < 1) {
    return ''
  }
  var resp = txt.normalize("NFD")
  resp = resp.replace(/[^0-9a-zA-Z\s]/g,'').trim();
  resp = resp.replace(/\s/g, "-");
  return resp
}