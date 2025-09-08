<template>
    <div class="container">
        <el-card>
            <el-radio-group v-model="state.country" @change="changeCountry">
                <el-radio :label="1">马来西亚</el-radio>
                <el-radio :label="4">菲律宾</el-radio>
            </el-radio-group>
            <el-table :data="state.tableData" style="width: 100%;margin-top: 20px;">
                <el-table-column label="搜索词">
                    <template #default="scope">
                        <div class="detail" @click="getProLis(scope.row.keyword)">
                            {{ scope.row.keyword }} <a @click="copyText(scope.row.keyword)">复制</a>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="keyword_cn" label="中文翻译"/>
                <el-table-column label="搜索量">
                    <template #default="scope">
                        <div>
                            <span>{{ formatNumber(scope.row.search_volume) }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="商品总数">
                    <template #default="scope">
                        <div>
                            <span>{{ formatNumber(scope.row.left_total_count) }}</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="prev, pager, next" :total="state.keywordTotal"
                               :current-page="state.currentPage" @current-change="handleCurrentChange"

                />
            </div>

        </el-card>
    </div>
    <el-dialog
            v-model="state.dialog"
            width="1200"
            :before-close="handleClose"
    >
        <div>
            <a :href="`https://ph.xiapibuy.com/item-i.${ item.shopId }.${ item.pid }`" v-for="item in state.proList" target="_blank">
                <el-tooltip raw-content :content="`总销量：${item.historicalSold}<br>月销量：${item.sold}<br>价格：${item.price}<br>评论：${item.ratingCount}`" effect="light" placement="right">
                    <img :src="`https://s-cf-ph.shopeesz.com/file/${item.image }_tn`" alt="" width="100" height="100">
                </el-tooltip>
            </a>
        </div>
    </el-dialog>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { keywordInfo, getKeywordProLis } from "../service/data";
import { formatNumber } from "../utils";
import copy from 'clipboard-copy'
import { ElMessage } from  'element-plus'

const state = reactive({
    tableData: [],
    proList: [],
    keywordTotal: 0,
    currentPage: 1,
    dialog: false,
    country: 4
});


onMounted(() => {
    init()
})

const init = async () => {
    const params = {
        country: state.country, //默认菲律宾
        index: state.currentPage, //当前页码
        keyword_type: 1,
        orderColumn: "search_volume",
        pageSize: 20,
        search_volume_start: 501,
        sort: "DESC"
    }
    const res = await keywordInfo(params)
    console.log(res)
    state.tableData = res.data
    state.keywordTotal = res.keywordTotal
}

const handleCurrentChange = (val) => {
    state.currentPage = val;
    init()
}

const copyText = async (text) => {
    try {
        await copy(text)
        ElMessage('复制成功')
    } catch (e) {
        ElMessage('出现错误')
    }
}

const getProLis = async (keyword) => {
    state.dialog = true;
    const res = await getKeywordProLis({country: 4, keyword: keyword})
    state.proList = res.data;
}

const changeCountry = (val) => {
    init()
}


</script>

<style lang="scss" scoped>
.pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}
    .detail {
        cursor: pointer;
        color: blue;
    }

</style>
