// 节流就是在规定的时间内 触发一次
// 1.第一次点击，立即调用方法并禁止按钮，等延迟结束在激活按钮
// 2.将需要触发的方法绑定在指令上
import type { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
	__handleClick__: () => any;
	disabled: boolean;
}

const throttle: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		// debugger;
		console.log(typeof binding.value);
		console.log(el.disabled);

		if (typeof binding.value !== "function") {
			throw "callback must be a function";
		}
		let timer: NodeJS.Timeout | null = null;
		el.__handleClick__ = function () {
			if (timer) {
				clearTimeout(timer);
			}
			if (!el.disabled) {
				el.disabled = true;
				binding.value();
				timer = setTimeout(() => {
					el.disabled = false;
				}, 1000);
			}
		};
		el.addEventListener("click", el.__handleClick__);
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};
export default throttle;
