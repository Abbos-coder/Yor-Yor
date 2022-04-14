import { extend } from "vee-validate";
import { required, email, alpha, confirmed } from "vee-validate/dist/rules";
extend("required", {
   ...required,
   message: "Это поле обязательно",
});
extend("email", {
   ...email,
   message: "Это  неверный email",
});
extend("min", {
   validate(value, args) {
      return value.length >= args.length;
   },
   params: ["length"],
   message: "Минимум {length} символа",
});
extend("max", {
   validate(value, args) {
      return value.length <= args.length;
   },
   params: ["length"],
   message: "Максимум  {length} символа",
});
extend("confirmed", {
   ...confirmed,
   message: "Подтверждение пароля не совпадает",
});
extend("alpha", {
   ...alpha,
   message: "Пишите только буквами ",
});
extend("minmax", {
   validate(value, { min, max }) {
      return value.length >= min && value.length <= max;
   },
   params: ["min", "max"],
   message: "В этом поле минимум {min} максимум {max}",
});
