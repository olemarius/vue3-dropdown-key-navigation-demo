import { computed, ref, type ComputedRef, type InjectionKey, type Ref } from 'vue'

export interface ListContext {
    listRef: Ref<(HTMLDivElement | null)[]>;
    listCount: ComputedRef<number>;
    selectedIndex: Ref<number>;
    showList: ComputedRef<boolean>;
}

export const listDefaults: ListContext = {
    listRef: ref([]),
    listCount: computed(() => 0),
    selectedIndex: ref(0),
    showList: computed(() => false)
  };
  

export const LIST_INJECTION_KEY: InjectionKey<ListContext> = Symbol('list-context');

