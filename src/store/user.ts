import { defineStore } from 'pinia'


// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore('users', {
    state: () => {
        return {
          name: "小猪",
          age: 25,
          sex: "男",
        };
      },
      getters: {
        getAddAge: (state) => {
          return (num: number) => state.age + num;
        },
        getNameAndAge(): string {
          return this.name + this.getAddAge; // 调用其它getter
        },
      },
      actions: {
        saveName(name: string) {
          this.name = name;
        },
      },
  // 其它配置项
//   name：一个字符串，必传项，该store的唯一id。
// options：一个对象，store的配置项，比如配置store内的数据，修改数据的方法等等。
})