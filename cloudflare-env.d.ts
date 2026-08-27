// The starter's optional database helper must guard this unconfigured binding.
declare namespace Cloudflare {
  interface Env { DB?: D1Database; }
}
