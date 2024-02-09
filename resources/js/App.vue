<template>
    <div>
        <HeaderPanel />
        <DatacardsField />
    </div>
</template>

<script>
import HeaderPanel from './components/HeaderPanel.vue'
import DatacardsField from './components/DatacardsField.vue'

export default {
    components: {
        HeaderPanel,
        DatacardsField
    }
};
</script>
