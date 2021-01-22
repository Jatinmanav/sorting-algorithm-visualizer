import { ref } from 'vue';

export default function useArray() {
  const array = ref([1, 2, 3]);

  const setArray = (value) => {
    array.value = value;
  };

  return { array, setArray };
}
