<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{name}}
    {{total}}
    <button @click="()=>{this.count = this.count + 1}">添加添加</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// class Scheduler {
//   constructor () {
//     this.list = [];
//   }
//   add (fn) {
//     this.list.push(fn);
//   }

//   start () {
//     // for (let i = 0; i < this.list.length; i++) {
//     //   this.list[i]();
//     // }
//     const fn = this.list.shift();
//     fn().then(() => {
//       if (this.list.length > 0) {
//         this.start();
//       }
//     })
//   }
// }

// function timeout (time) {
//   return new Promise((resolve) => {
//      setTimeout(resolve, time);
//   });  
// }

// const schedule = new Scheduler();

// function addTask (time, order) {
//   schedule.add(() => {
//     return timeout(time).then(() => {
//       console.log(order);
//     })
//   })
// }


// addTask(5000, 1)
// addTask(300, 2)
// addTask(1000, 3)
// addTask(2000, 4)

// schedule.start();

class Scheduler {
  constructor(maxCount) {
    this.maxCount = maxCount;
    this.list = [];
    this.index = 0;
  }

  add(fn) {
    this.list.push(fn);
  }

  start() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }

  request() {
    if (!this.list || !this.list.length || this.index >= this.maxCount) {
      return;
    }
    this.index++;
    const fn = this.list.shift();
    fn().then(() => {
      this.index--;
      this.request();
    });
  }
}

const scheduler = new Scheduler(2);

function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function addTask(time, order) {
  scheduler.add(() =>
    timeout(time).then(() => {
      console.log(order);
    })
  );
}

addTask(5000, 1);
addTask(500, 2);
addTask(1000, 3);
addTask(3000, 4);

// scheduler.start();


function debounce (fn, time) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer =  setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}
function fn () {
  console.log(this);
}
document.querySelector("body").addEventListener("click", debounce(fn, 400))

// function throttle (fn, time) {
//   let canRun = true;
//   return function () {
//     if (!canRun) {
//       return
//     } else {
//       canRun = false;
//       setTimeout(() => {
//         fn();
//         canRun = true;
//       }, time);
//     }
//   }
// }

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      count: 4,
      name: 1
    }
  },
  computed: {
    total () {
      return this.count + 1;
    }
  },
  create () {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
