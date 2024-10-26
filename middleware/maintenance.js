export default async function({redirect,route, $config}) {
    let locale = 'en'
    const data = await fetch(`${$config.CMS_API_BASE}/api/generals`).then((r) => r.json());
    
    // console.log('maintenance:',`${$config.CMS_API_BASE}/api/webs`)
    // console.log('maintenance:',data)
    let isMaintenance = false;
    if (data) {
      const responseData = data.data
      responseData.map((item) => {
        const key = item.attributes.parameter;
        // console.log('keys:', key)
        if (key === 'site_under_maintenance') {
          let paramVal = item.attributes.value;
          if(paramVal.web !== undefined){            
            isMaintenance = paramVal.web.enable
          }
        } else {
          // console.log('other keys:', key)
        }
      })
      // console.log('maintenance responseData:', responseData)
    }

    
    if(isMaintenance){
      return redirect('/maintenance')
    }
    if(isMaintenance === false && route.path === '/maintenance'){
      return redirect('/')
    }
}