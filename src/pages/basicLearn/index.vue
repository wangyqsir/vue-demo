<template>
  <el-tabs class="text-left" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="插值" name="first">
        <h2>插值</h2>
        示例：
        <div class="demo-box">
          <h3><a href="">文本</a></h3>
          <p>{{first.msg}}</p>
          <hr/>
          <h3><a href="">特性</a></h3>
          <p v-bind:class="first.className">我的class是动态的</p>
          <hr/>
          <h3><a href="">使用 JavaScript 表达式</a></h3>
          <p>
            {{ first.number + 1 }}

            {{ first.ok ? 'YES' : 'NO' }}

            {{ first.message.split('').reverse().join('') }}
          </p>
          <div v-bind:id="'list-' + first.id">动态ID</div>
          <hr/>
        </div>
    </el-tab-pane>
    <el-tab-pane label="指令" name="second">
      <h2>指令</h2>
      示例：
      <div class="demo-box">
        <h3>参数</h3>
        <p><a v-bind:href="second.href">v-bind:href</a></p><hr/>
        <h3>修饰符</h3>
        <p><button v-on:click.prevent="secondClick">点击事件</button></p><hr/>
        <h3>缩写</h3>
        <p>v-bind缩写</p>
        <p><a :href="second.href">v-bind:href==:href</a></p>
        <hr/>
        <p>v-on缩写</p>
        <p><button @click.prevent="secondClick">v-on:click==@click</button></p>
        <hr/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="计算属性和侦听器" name="third">
      <h2>计算属性</h2>
      <div class="demo-box">
        <h3>基础例子 </h3>
        <p>计算长表达式:{{reversedMessage}}</p><hr/>
        <h3>计算属性的setter </h3>
        <p>fullName:{{fullName}} firstName:{{third.firstName}} lastName:{{third.lastName}}</p>
      </div>
      <h2>侦听器</h2>

    </el-tab-pane>
    <el-tab-pane label="Class与Style绑定" name="fourth">
      <h2>Class与Style绑定</h2>
      <h3>Class</h3>
      <div class="demo-box">
          <p class="static" :class="{ active: fourth.isActive, 'text-danger': fourth.hasError }">对象语法</p>
          <p class="static" :class="fourth.classObj">内置对象</p>
          <p class="static" :class="classObject">计算属性绑定类名</p>

      </div><hr/>
      <h3>数组语法</h3>
      <div class="demo-box">
          <p :class="fourth.classArray">数组语法绑定class</p>
          <p :class="[fourth.isActive ? fourth.activeClass:'',fourth.hasError ? fourth.errorClass:'']">数组语法绑定class</p>
      </div>
      <h3>在组件上使用动态class</h3>
      <div class="demo-box">
        <el-button type="primary" :class="fourth.classArray">主要按钮</el-button>
      </div>
      <hr/>

      <h2>绑定内联样式</h2>
      <div class="demo-box">
        <p :style="{ color: fourth.activeColor, fontSize: fourth.fontSize + 'px' }">对象语法</p>
        <p :style="fourth.styleObject">内置对象</p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="条件渲染" name="five">
      <h2>条件渲染</h2>
      <h3>v-if</h3>
      <div class="demo-box">
        <p v-if="five.isShow">Yes</p>
        <h1 v-else>No</h1>

       <!--key 管理可复用的元素-->
        <p v-if="five.type=='1'" key="1">1 SHOW</p>
        <p v-else-if="five.type=='2'" key="2">2 SHOW</p>
        <p v-else="five.type=='3'" key="3">3 SHOW</p>

      </div><hr/>
      <h3>v-show</h3>
      <div class="demo-box">
        <p v-show="five.type=='2'" key="1">2 SHOW</p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="列表渲染" name="six">
      <h2>列表渲染</h2>
      <h3>基础渲染数组和对象</h3>
      <div class="demo-box">
        <p>数组</p>
        <ul>
          <li v-for="(item,index) of six.items" >
            {{item.message}}+{{index}}
          </li>
        </ul>
        <p>对象</p>
        <ul>
          <li v-for="(obj,key,index) of six.object" :key="index">
            {{key}}+{{obj}}+{{index}}
          </li>
        </ul>
      </div><hr/>
      <h3>数组更新检测</h3>
      <p>变异方法</p>
      <div class="demo-box">
        <p>Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：</p>
        <ul>
          <li><code>push()</code></li>
          <li><code>pop()</code></li>
          <li><code>shift()</code></li>
          <li><code>unshift()</code></li>
          <li><code>splice()</code></li>
          <li><code>sort()</code></li>
          <li><code>reverse()</code></li>
        </ul>
        <el-button type="success" @click="updateArray">触发数组跟新</el-button>
      </div>
      <p>替换数组(返回新数组)</p>
      <div class="demo-box">
        <ul>
          <li><code>filter()</code></li>
          <li><code>concat()</code></li>
          <li><code>slice()</code></li>
        </ul>
        <el-button type="success" @click="instateArray">触发数组替换</el-button>

      </div><hr/>
      <p>修改数组某一个值</p>
      <div class="demo-box">
        <ul>
          <li v-for="(item,index) of six.items" >
            {{item.message}}+{{index}}
          </li>
        </ul>
        <el-button type="success" @click="changeArrayValue">修改某个值更新</el-button>
      </div>
      <h3>对象更改检测</h3>
      <p>还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除</p>
      <div class="demo-box">
        <ul>
          <li v-for="(obj,key,index) of six.object" :key="index">
            {{key}}+{{obj}}+{{index}}
          </li>
        </ul>
        <el-button type="success" @click="addObjValue">新增某个对象的属性</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="事件处理" name="seven">
      <h2>事件处理</h2>
      <h3>简单列子</h3>
      <div class="demo-box">
        <el-button type="success" @click="clickEvent">点击事件</el-button>

      </div><hr/>
    </el-tab-pane>
    <el-tab-pane label="" name="">
      <h2></h2>
      <h3></h3>
      <div class="demo-box"></div><hr/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ElTabPane from "element-ui/packages/tabs/src/tab-pane";
import Vue from 'vue'
export default {
  components: {ElTabPane},
  data() {
    return {
      activeName: 'first',
      first:{
        msg:'这是示例文本',
        className:'class1',
        number:1,
        ok:true,
        message:'这是 示例字符串',
        id:'Demo'
      },
      second:{
        href:location.href
      },
      third:{
        message:'这是示例字符串',
        firstName:'王',
        lastName:'永奇',
      },
      fourth:{
        isActive:true,
        hasError:false,
        classObj:{
          active: true, 'text-danger': false
        },
        activeClass: 'active',
        errorClass: 'text-danger',
        classArray:['active','text-danger'],
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      },
      five:{
        isShow:true,
        type:'2'
      },
      six:{
        items:[
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        }
      }
    };
  },
  computed:{
    // 计算属性的 getter
    reversedMessage () {
      // `this` 指向 vm 实例
      return this.third.message.split('').reverse().join('')
    },
    fullName:{
      get(){
        return this.third.firstName+this.third.lastName
      },
      set(newValue){
        var names = newValue.split('')
        this.third.firstName=names[0]
        this.lastName=names.slice(1,names.length).join('');
      }
    },
    classObject: function () {
      return {
        active: this.fourth.isActive && !this.fourth.hasError,
        'text-danger': this.fourth.hasError
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    secondClick(e){
      console.log(e)
    },
    updateArray(){
      this.six.items.push({message:'Too'})
    },
    instateArray(){
      this.six.items=this.six.items.concat([{message:'新数组的类'}])
    },
    changeArrayValue(){
      Vue.set(this.six.items,0,{message:'修改后的值'})
    },
    addObjValue(){
      // Vue.set(this.six.object,'phone','13551391607');
      this.six.object = Object.assign({}, this.six.object, {
        phone: '13551391607',
        favoriteColor: 'Vue Green'
      })
    },
    clickEvent(){
      alert('点击了');
    }
  }
};
</script>

<style scoped>
  .demo-box{
    border: 1px solid greenyellow;
    background: #fff;
    width: 80%;
    margin: 0 auto;
  }
  .text-left{
    text-align: left;
  }
</style>
