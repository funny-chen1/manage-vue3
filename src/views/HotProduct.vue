<template>
    <div class="container">
        <el-card>
            <el-radio-group v-model="state.country" @change="changeCountry">
                <el-radio :label="1">马来西亚</el-radio>
                <el-radio :label="4">菲律宾</el-radio>
            </el-radio-group>
            <el-table :data="state.tableData" style="width: 100%;margin-top: 20px;">
                <el-table-column label="信息" width="200px">
                    <template #default="scope">
                        <div>
                            <img :src="`https://s-cf-ph.shopeesz.com/file/${scope.row.image}_tn`" alt="" height="150" width="150">
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="标题"/>
                <el-table-column prop="price" label="价格"/>
                <el-table-column label="总销件数">
                    <template #default="scope">
                        <div>
                            <span>{{ formatNumber(scope.row.historicalSold) }}</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="prev, pager, next" :total="state.productTotal"
                               :current-page="state.currentPage" @current-change="handleCurrentChange"

                />
            </div>
        </el-card>
    </div>
</template>
<script setup>
import { reactive, onMounted, watch } from 'vue'
import { productList } from "../service/data";
import { useRoute } from 'vue-router'
import { formatNumber, getTodayDate } from "../utils";

const state = reactive({
    tableData: [],
    productTotal: 0,
    currentPage: 1,
    country: 4
});

const route = useRoute();

onMounted(() => {
    init(route.params.type)
});

watch(
    () => route.params.type,
    (newType) => {
        init(newType)
    }
)

const init = async (type) => {
    const params = {
        country: state.country,
        index: state.currentPage,
        orderColumn: 'historical_sold',
        pageSize: 20,
        pidStatus: 1,
        shopee_choice: 1,
        titleStatus: 1,
        type: 1,
        sort: 'DESC',
        cb_option: 1
    };
    if (type) {
        params.genTimeStart = '2025-05-10';
        params.genTimeEnd = getTodayDate();
    }
    const res = await productList(params);
    state.tableData = res.data;
    state.productTotal = res.productTotal;
}

const handleCurrentChange = (val) => {
    state.currentPage = val;
    init()
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

</style>
