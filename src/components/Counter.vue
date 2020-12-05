<template>
    <div>
        <span>
            {{count}}
        </span>
        <button id="increment" @click="count++">
            +
        </button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data: () => ({
            count: 0
        }),
    }
</script>
