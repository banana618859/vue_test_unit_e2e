<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-12-04 08:20:38
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-12-04 11:08:11
 -->
<template>
    <div>
        son-page:{{father}}
        <span>{{ $t('common.submit')}}</span>
        <vxe-table :data="tableData">
            <vxe-table-column type="index" title="序号" width="80"></vxe-table-column>
            <vxe-table-column field="name" title="名字"></vxe-table-column>
            <vxe-table-column field="sex" title="性别"></vxe-table-column>
            <vxe-table-column field="address" title="地址"></vxe-table-column>
        </vxe-table>
    </div>
</template>

<script>
    export default {
        props: {
            father: String
        },
        data() {
            return {
                sonName: 'son',
                tableData: [
                    {
                        id: 10001,
                        name: '名字1',
                        role: '角色',
                        sex: '男',
                        address: '深圳市 圳市 市 xxx'
                    }
                ]
            }
        },
        mounted() {
            console.log('--son-mounted:', this.sonName)
        }
    }
</script>