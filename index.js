console.log('api-test started');

import vue from 'vue';

export function test() {
  console.log('test');
  console.log('vue loaded: ', vue)
  return true;
}