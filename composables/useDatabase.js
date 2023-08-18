
export const getItem = async (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))._value;
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
