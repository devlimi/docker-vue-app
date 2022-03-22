<template>
  <div>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paging',
  data () {
    return {
      pageNum: 0
    }
  },
  props: {
    pageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    }
  },
  computed: {
    pageCount () {
      let listLeng = this.listArray.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;

      return page;
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize,
          end = start + this.pageSize;
      return this.listArray.slice(start, end);
    }
  }
}
</script>
