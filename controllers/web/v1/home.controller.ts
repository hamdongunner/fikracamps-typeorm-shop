import { Category } from "../../../src/entity/Category";
import { User } from "../../../src/entity/User";
import { okRes } from "../../../utility/util.service";

/**
 *
 */
export default class HomeController {
  static async getCategories(req, res) {
    let data, users;
    //  data = await Category.find({ relations: ["subcategories"] });

    data = Category.find({
      where: { active: true },
      join: {
        alias: "category",
        leftJoinAndSelect: {
          subcategories: "category.subcategories",
          products: "subcategories.products",
        },
      },
    });

    users = User.find();

    [data, users] = await Promise.all([data, users]);

    return okRes(res, { data, users });
  }
}
