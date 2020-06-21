import {
  articles_url,
  category,
  country_code,
  _api_key,
} from "../config/rest_config";

export async function getArticles() {
  try {
    let all_articles = await fetch(
      `${articles_url}?country=${country_code}&category=${category}&apiKey=${_api_key}`
    );

    let result = await all_articles.json();

    return result.articles;
  } catch (err) {
    throw err;
  }
}
