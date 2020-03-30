<template>
  <div ref="chart" :style="{width,height}"></div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    props: {
      width: {
        type: String,
        default: "500px"
      },
      height: {
        type: String,
        default: "300px"
      },
      data: {
        type: Array,
        required: true
      },
      options: {
        required: true
      }
    },
    mounted() {
      let series = this.options.keys.map(r => {
        return {
          name: r.label,
          type: "line",
          data: this.data.map(rr => rr[r.val])
        }
      });

      let option = {
        title: {
          text: this.options.title,
          left: "center",
          subtext: this.options.subtext
        },
        legend: {
          bottom: 0,
          formatter: "2020 {name}"
        },
        tooltip: {
          formatter: d => {
            return this.options.tooltipFmt(d)
          },
        },
        xAxis: {
          data: this.data.map(r => r[this.options.xAxisKey]),
          axisLabel: {
            rotate: 30,
            fontSize: 10
          }
        },
        yAxis: {
          type: "value"
        },
        series
      };
      this.initChart(this.$refs.chart, option, data => {
        console.log(data);
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
