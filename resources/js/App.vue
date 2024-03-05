<template>
    <div>
        <HeaderPanel />
        <RouterView />
    </div>
</template>

<script>
import HeaderPanel from './components/HeaderPanel.vue'

export default {
    components: {
        HeaderPanel,
    }
};
</script>
