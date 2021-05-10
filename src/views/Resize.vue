<template>
  <div class="container">
    <div class="resize-element">
      改变大小试试
    </div>
    <h1 class="resize-record">
      触发了{{num}}次resize事件。
    </h1>
  </div>

</template>

<script>
export default {
  name: 'Resize',
  data () {
    return {
      observer: null,
      num: 0,
      recordOldValue: { // 记录下旧的宽高数据，避免重复触发回调函数
        width: '0',
        height: '0'
      }
    }
  },
  mounted () {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    const element = document.querySelector('.resize-element')
    this.observer = new MutationObserver((mutationList) => {
      // for (const mutation of mutationList) {
      //   console.log(mutation)
      // }
      const width = getComputedStyle(element).getPropertyValue('width')
      const height = getComputedStyle(element).getPropertyValue('height')
      if (width === this.recordOldValue.width && height === this.recordOldValue.height) return
      this.recordOldValue = {
        width,
        height
      }
      this.num += 1
    })
    this.observer.observe(element, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })
  }

}
</script>

<style scoped lang="scss">
  .container{
    position: relative;
    width: 100%;
    height: 100%;
    .resize-element{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      height: 100px;
      width: 100px;
      box-shadow: 0 0 1px 1px #3361D8;
      border-radius: 2px;
      overflow: hidden;
      resize:both;
    }
    .resize-record{
      text-align: center;
    }
  }

</style>
