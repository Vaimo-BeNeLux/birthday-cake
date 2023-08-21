
export const getItem = async (key) => {
  try {
    let item = localStorage.getItem(key)
    if(item !== undefined) item = JSON.parse(item);
    return item?._value || item;
  } catch (e) {
    console.log('error', e)
    return null
  }
}

export const setItem = async(key, value) =>{
  localStorage.setItem(key, JSON.stringify({ _value: value }));
  return true;
}

export const removeItem = async (key) => {
  localStorage.removeItem(key);
  return true;
}
