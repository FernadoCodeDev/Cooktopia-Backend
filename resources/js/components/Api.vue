<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface User {
    id: number;
    name: string;
}

export default defineComponent({
    setup() {
        const users = ref<User[]>([]);

        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('/products');
                users.value = response.data;
            } catch (err) {
                console.error(err);
            }
        };
        onMounted(fetchUsers);
        return { users };
    },
});
</script>

<template>
 <div class="p-4 text-white bg-green-500">
  Esto debería verse verde con texto blanco
</div>

</template>
