<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=24&duration=3000&pause=1200&color=58A6FF&center=true&vCenter=true&width=560&lines=Hi%2C+I'm+Oleksandr+%F0%9F%91%8B;Middle+backend+engineer+at+OBRIO;Event-driven+systems+%C2%B7+data+%C2%B7+AI+tooling" alt="Hi, I'm Oleksandr — middle backend engineer at OBRIO" />

Middle backend engineer at **OBRIO** · 4th-year Software Engineering student at **KPI FICE** · Kyiv, Ukraine

<a href="https://t.me/qwertannov"><img src="https://img.shields.io/badge/Telegram-26A5E4?style=flat&logo=telegram&logoColor=white" alt="Telegram" /></a>
<a href="https://www.linkedin.com/in/sokolov-oleksandr/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="mailto:write2sokolov@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white" alt="Email" /></a>

</div>

### About

<img src="assets/bonsai/bonsai.gif" align="right" width="170" alt="Pixel-art bonsai grown from my commit history" />

I work on the microservice backend of a consumer product with 70M+ users: TypeScript and NestJS mostly, some PHP and Python, everything talking over RabbitMQ and running on Kubernetes. Over the last year and a half I've worked across 40 services, owned epics end to end, and taken backend on-call shifts.

### Selected work

The code is private, so here's what it was about.

- **AI merge-request reviewer.** On my own initiative, I turned our in-house Slack AI assistant into a reviewer for merge requests. Unlike the off-the-shelf review tool we already used, it has context across the whole system and its integrations, so it reviews a change against everything that change touches. It is also much cheaper. It runs on a deterministic retrieval step plus a single model call, and now reviews MRs for the backend, frontend and mobile teams.
- **GDPR data deletion.** Event-driven hard delete across 10+ services and third-party providers, including backfilling users who were deleted before it existed.
- **Data contracts.** Contracts between backend and data engineering, loaded at runtime and validated without blocking the event flow, with alerts routed to owners.
- **Attribution pipeline.** Tech owner of an event-tracking and marketing-attribution pipeline handling ~350k events/day, from requirements and capacity planning to k6 load tests and production verification.
- **Breaking up the monolithic BFFs.** I started by helping move the funnels' backend out of a monolithic BFF into microservices. Then I worked on splitting up the SPA's BFF, where I built a new stateless service along the way. Now I lead that decommissioning: mapping the coupling first, then moving routes and events out consumer by consumer, without downtime.
- **Split-testing service.** Built from scratch. It merges anonymous and logged-in assignments and stays race-safe through atomic upserts and partial unique indexes.
- **Search.** I was the first on the team to bring in OpenSearch. I delivered full-text search, async indexing over RabbitMQ, and index migrations with zero-downtime reindexing through aliases.
- **Platform work.** A shared RabbitMQ topology module adopted by 8+ services, a NestJS 11 / Express 5 / Node upgrade, a CVE-patching policy, log and trace masking, and Grafana dashboards as code.

<details>
<summary><b>Production investigations I enjoyed</b></summary>
<br>

- Pods killed under CPU limits, traced back to synchronous code blocking the event loop.
- A file-descriptor leak in a native library that left one open handle per worker thread.
- Redis OOM kills caused by a bulk operation rewriting the same 16 MiB key dozens of times.
- A quarter of a service's logs silently dropped by an Elasticsearch dynamic-mapping conflict.
- Webhook delays of 30–60 minutes that turned out to be CDN-level traffic re-steering, after ruling out four other hypotheses.

</details>

### Stack

<p>
  <img src="https://skillicons.dev/icons?i=ts,nestjs,nodejs,php,symfony,py&theme=dark" alt="TypeScript, NestJS, Node.js, PHP, Symfony, Python" />
  <br>
  <img src="https://skillicons.dev/icons?i=rabbitmq,postgres,mongodb,mysql,redis,elasticsearch&theme=dark" alt="RabbitMQ, PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch" />
  <br>
  <img src="https://skillicons.dev/icons?i=kubernetes,docker,gitlab,nginx,cloudflare,grafana,prometheus,sentry,jest&theme=dark" alt="Kubernetes, Docker, GitLab CI, nginx, Cloudflare, Grafana, Prometheus, Sentry, Jest" />
</p>

<p>
  <img src="https://img.shields.io/badge/OpenSearch-005EB8?style=flat&logo=opensearch&logoColor=white" alt="OpenSearch" />
  <img src="https://img.shields.io/badge/ArgoCD-EF7B4D?style=flat&logo=argo&logoColor=white" alt="ArgoCD" />
  <img src="https://img.shields.io/badge/OpenTelemetry-000000?style=flat&logo=opentelemetry&logoColor=white" alt="OpenTelemetry" />
  <img src="https://img.shields.io/badge/k6-7D64FF?style=flat&logo=k6&logoColor=white" alt="k6" />
  <img src="https://img.shields.io/badge/BullMQ-DC382D?style=flat" alt="BullMQ" />
  <img src="https://img.shields.io/badge/Langfuse-0A0A0A?style=flat" alt="Langfuse" />
  <img src="https://img.shields.io/badge/Claude_Code-D97757?style=flat&logo=claude&logoColor=white" alt="Claude Code" />
</p>

### Activity

<p>
  <img src="https://raw.githubusercontent.com/sokolovgit/sokolovgit/output/terminal-stats.svg" width="100%" alt="GitHub stats in a terminal window" />
</p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/sokolovgit/sokolovgit/output/github-snake-dark.svg" />
  <img src="https://raw.githubusercontent.com/sokolovgit/sokolovgit/output/github-snake.svg" alt="Contribution graph eaten by a snake" />
</picture>
