Real photos in use:

  - crest.png          — official WCCRM crest, used in the header logo and
                          generated favicon/OG image
  - sanctuary.jpg       — home page hero (Watchman Fellowship Center)
  - sunday-service.jpg  — Get Involved page, Sunday worship section

Still placeholders — the 4 leadership photos on `/about`
(`components` render `.photo` blocks in `app/about/page.tsx`). None of the
supplied candid photos were labeled with names, so none were assigned
automatically to avoid mismatching a leader's photo. Drop a headshot per
leader here (e.g. `pastor-amos-youngo.jpg`) and swap the `.photo` block for
each leader in `app/about/page.tsx`, e.g.:

  import Image from "next/image";
  <Image src="/images/pastor-amos-youngo.jpg" alt="Pastor Amos Youngo" fill className="object-cover" />
