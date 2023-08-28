<template>
  <div>
    循环嵌套拉伸
    <div class="container container-100">
      <div
        v-sy-resize.right
        class="left"
      />
      <div class="right">
        <div class="container-50 container container-tb">
          <div
            v-sy-resize.bottom
            class="top"
          />
          <div class="bottom">
            <div
              v-sy-resize.right
              class="bottom-left"
            />
            <div class="bottom-right" />
          </div>
        </div>
      </div>
    </div>
    <br>
    左拉伸
    <div class="container-100 container">
      <div
        class="left"
        style="overflow:auto"
      />
      <div
        v-sy-resize.left="{
          minWidth: 100,
        }"
        class="right"
      />
    </div>
    左右拉伸
    <div class="container-100 container">
      <div
        class="left"
        style="width: 33.33333333%"
      />
      <div
        v-sy-resize.left.right
        class="center"
        style="width: 33.33333333%"
      />
      <div
        class="right"
        style="width: 33.33333333%"
      />
    </div>
    下拉伸
    <div class="container-100 container container-tb">
      <div
        v-sy-resize.bottom
        class="top"
      />
      <div class="bottom" />
    </div>
    <br>
    上拉伸
    <div class="container-100 container container-tb">
      <div class="top" />
      <div
        v-sy-resize.top
        class="bottom"
      />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container-50{
  height: 200px;
}
.container-tb {
  display:flex;
  flex-direction: column;
  >div{
    flex:1;
  }
}
.container-100{
  height: 200px;
  width: 80vw;
  >div{
    float:left;
  }
}
.container {
  display: flex;
  > div {
    background-color: #f2f2f2;
    &.left {
      width: 50%;
    }
    &.center {
      width: 33.33333%;
      background: #3f7ef7;
    }
    &.right {
      width: 50%;
      background-color: #353640;
    }
    &.top {
      background-color: lightblue;
    }
    &.bottom {
      display:flex;
      background-color: #353640;
      .bottom-left {
        width: 50%;
        height: 100%;
        background-color: lightcoral;
      }
      .bottom-right {
        width: 50%;
        height: 100%;
        background-color: lightgreen;
      }
    }
  }
}
</style>