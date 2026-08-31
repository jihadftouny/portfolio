/*
 * The only script logic this Worker has: canonical-host enforcement.
 *
 * The site moved from portfolio.ftouny.com to the apex on 2026-08-30.
 * Both hostnames stay attached as Custom Domains, and anything that is
 * not the apex 301s there with its path intact, so every link that ever
 * pointed at the old hostname keeps working. Everything else is static
 * assets, served by Cloudflare via the ASSETS binding.
 *
 * Requires `run_worker_first = true` in wrangler.toml: without it,
 * asset-matching paths (every page) would be served before this runs and
 * the old hostname would show the site instead of redirecting.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== "ftouny.com") {
      url.hostname = "ftouny.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
