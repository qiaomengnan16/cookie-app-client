import fetch from './fetch'

export function commonFetch (fuc, search, success, error) {
  fuc(search).then(response => {
    success(response)
  }).catch(response => {
    if (error) {
      error(response)
    }
  })
}

export function commonPromise (fuc, search, success, error) {
  return new Promise(resolve => {
    fuc(search).then(response => {
      success(response)
      resolve(response)
    }).catch(response => {
      if (error) {
        error(response)
      }
    })
  })
}

function post(url, searchModel) {
  return fetch({
    url: url,
    method: 'post',
    data: searchModel
  })
}



// 病情列表
export function illnessList(searchModel) {
  let url = `/illness/list`
  return post(url, searchModel)
}

// 看病
export function illnessGet(searchModel) {
  let url = `/illness/get`
  return post(url, searchModel)
}

// 药品列表
export function medicineList(searchModel) {
  let url = `/medicine/list`
  return post(url, searchModel)
}

// 取药
export function medicineGet(searchModel) {
  let url = `/medicine/get`
  return post(url, searchModel)
}

// 看病历史
export function userIllnessList(searchModel) {
  let url = `/user/illness/list`
  return post(url, searchModel)
}

// 取药历史
export function userMedicineList(searchModel) {
  let url = `/user/medicine/list`
  return post(url, searchModel)
}

// 登录
export function userLogin(searchModel) {
  let url = `/user/login`
  return post(url, searchModel)
}

// 登录
export function userRegister(searchModel) {
  let url = `/user/register`
  return post(url, searchModel)
}

// 用户详情
export function userCurrent(searchModel) {
  let url = `/user/current`
  return post(url, searchModel)
}
