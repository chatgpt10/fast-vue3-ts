// 防抖函数 只触发最后一次
// 接受参数 function
import type { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
	__handleClick__: () => any;
}

const debounce: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") {
			throw "传入的参数必须是一个function";
		}
		let timer: NodeJS.Timeout | null = null;
		el.__handleClick__ = function () {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				binding.value();
			}, 1000);
		};
		el.addEventListener("click", el.__handleClick__);
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

export default debounce;
