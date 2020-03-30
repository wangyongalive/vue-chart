import echarts from "echarts";
import Line from "./Line";

export default {
  install: function (Vue) {
    Vue.mixin({
      methods: {
        initChart(container, option, onclick) {
          const myChart = echarts.init(container);
          option.color =['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
          myChart.setOption(option);
          if (onclick) myChart.on("click", onclick);
        }
      }
    });
    Vue.component("sb-line", Line);// sb-line就是可以使用的组件
  }
}
