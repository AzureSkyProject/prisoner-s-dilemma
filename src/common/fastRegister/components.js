import TlExample from "@/components/TlExample.vue";

let components = [
  TlExample,
];

// vue自定义组件祖册
export default (Vue) => {
  for (let i in components) {
    Vue.component(components[i].name, components[i]);
  }
}