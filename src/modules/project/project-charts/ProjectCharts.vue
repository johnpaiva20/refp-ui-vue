<template>
  <div class="project-expanses-container">
    <div class="widget">
      <div class="header">Categoria Contábil (%)</div>
      <div id="chart1" class="chart-container">
        <chartjs-doughnut
          :width="mywidth"
          :height="myheight"
          :labels="labels"
          :datasets="datasets"
          :option="option"
        ></chartjs-doughnut>
      </div>
    </div>

    <div class="widget" id="widget2">
      <div class="header">Categoria Contábil (Reais)</div>
      <div id="chart2" class="chart-container">
        <chartjs-bar :labels="mylabels" :datasets="mydatasets"></chartjs-bar>
      </div>
    </div>
  </div>
</template>

<style>
.project-expanses-container {
  position: absolute;
  top: 10px;
  padding: 30px 5px 15px 5px;
}
#widget2 {
  margin-left: 560px;
  margin-top: -360px;
  width: 580px;
}
#chart2 {
  margin-top: 20px;
}
.widget {
  margin-left: 10px;
  width: 500px;
  height: 360px;
  margin-top: 50px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #06060d;
}

.header {
  background-color: #3e8f51;
  height: 40px;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 40px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  font-weight: 400;
  font-size: 1.5em;
  text-shadow: 1px 1px #06060d;
}

.chart-container {
  padding: 10px;
  margin-left: 0px;
}

.shadow {
  -webkit-filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.5));
}
</style>
<script>
export default {
  data() {
    return {
      mywidth: 800,
      myheight: 500,
      labels: [
        'Recursos Humanos',
        'Materiais de Consumo',
        'Materiais permanente e equipamentos',
        'Serviços de terceiros',
        'Viagens e diárias',
        'Outros',
      ],
      datasets: [
        {
          data: [20, 10, 20, 10, 20, 20],
          backgroundColor: [
            '#2ecc71',
            '#27ae60',
            '#16a085',
            '#1abc9c',
            '#4cd137',
            '#44bd32',
          ],
        },
      ],
      option: {
        title: {
          display: true,
        },
      },

      mylabels: [
        'Recursos Humanos',
        'Materiais de Consumo',
        'Mat.Permanente e equip.',
        'Serviços de terceiros',
        'Viagens e diárias',
        'Outros',
      ],
      mydatasets: [
        {
          label: 'Estimado',
          backgroundColor: [
            '#2ecc71',
            '#2ecc71',
            '#2ecc71',
            '#2ecc71',
            '#2ecc71',
            '#2ecc71',
          ],
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Utilizado',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1,
          data: [20, 50, 20, 41, 26, 85, 20],
        },
      ],
    };
  },
};
</script>