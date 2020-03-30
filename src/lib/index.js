import echarts from "echarts";
import Line from "./Line";

export default {
  install: function (Vue) {
    Vue.mixin({
      methods: {
        initChart(container, option, onclick) {
          const myChart = echarts.init(container);
          option.color = ["#FF0FCC", 'orangred', "#99CCCC", "#FF6666", 'skyblue'];
          myChart.setOption(option);
          if (onclick) myChart.on("click", onclick);
        }
      }
    });
    Vue.component("sb-line", Line);// sb-line就是可以使用的组件
  }
}
