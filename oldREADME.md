# NapInn

[napinn.herokuapp.com](http://napinn.herokuapp.com)

## Minimum Viable Product

NapInn is an AirBnB inspired web application that will focus on microstays instead of overnight/vacation rentals. NapInn will be built using Ruby on Rails and React.js. By the end of week 9, which runs from the 6th to the 10th of June, NapInn will satisfy at least the following criteria:

- [x] New account creation, login, and demo/guest user functionality
- [x] Smooth, bug-free navigation
- [x] Adequate seed data to demonstrate the site's features
- [x] The minimally necessary features for an AirBnB-inspired site: creation and listing of nap-spots, search functionality paired with Google Maps (searching via location, dates, price, and nap-spot type), nap spot bookings and reviews
  - [x] Create an account (MVP)
  - [x] Log in / Log out, including as a Guest/Demo User (MVP)
  - [ ] Post, view, edit, and remove nap-spot listings (MVP)
  - [x] Search for nap spots via various criteria (MVP)
  - [x] Book Nap Spots (MVP)
- [x] Hosting on Heroku
- [x] CSS styling that is modern and attractive
- [x] A production README, replacing this README

<!--(**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- I'll write this later)
 -->
## Product Goals and Priorities

NapInn will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account (MVP)
- [x] Log in / Log out, including as a Guest/Demo User (MVP)
- [x] Post, view, edit, and remove nap-spot listings (MVP)
- [x] Search for nap spots via various criteria (MVP)
- [x] Book Nap Spots (MVP)
- [ ] Set Nap-Spots as 'instant-book' (expected feature, but not MVP)
- [ ] Create and share micro guidebooks pertaining to the area surrounding a nap-spot (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./project-proposal/docs/views.md
[components]: ./project-proposal/docs/components.md
[flux-cycles]: ./project-proposal/docs/flux-cycles.md
[api-endpoints]: ./project-proposal/docs/api-endpoints.md
[schema]: ./project-proposal/docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 day)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages

### Phase 2: Nap-Spots Model, API, and basic APIUtil (1.5 days)

**Objective:** Nap-Spots can be created, read, edited and destroyed through
the API.

- [x] create `NapSpot` model (location, price, description, owner_id, type, images)
- [x] seed the database with a small amount of test data
- [x] CRUD API for Nap-Spots (`NapSpotsController`)
- [x] jBuilder views for Nap-Spots
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.


### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Nap-Spots can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each napspot component, building out the flux loop as needed.
  - [x] `NapSpotIndex`
  - [x] `NapSpotItem`
  - [x] `NapSpotForm` (6/5 now a series of components linking to a single form)
  - [x] `NapSpotDetail`
- [ ] merge auth with creation/viewing of nap-spots

### Phase 4: Availability (0.5 days)

- [ ] create `Availability` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for `Availability` (`AvailabilitiesController`)
- [ ] update `APIUtil` to work with Availabilities
- [ ] test out API interaction in the console.

### Phase 5: Search/Filtering (1.5 days)

**Objective:** Users and guests can search for Nap-Spots via location, price, availability and type.

- [x] build out basic search form and functionality within `SearchForm` and `NapSpotFilter`:
  - [x] filtering by location
  - [ ] filtering by price
  - [ ] filtering by availability
  - [ ] filtering by type
- [x] enable Google Maps integration in `NapSpotIndex`

### Phase 6: Start Styling (0.5 days)

**Objective:** Existing pages will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 7: Bookings (1.5 days)

**Objective:** Users can request bookings, owners can accept/deny bookings.

- [x] create `Booking` model.
- [x] implement bookings so that they adjust Nap-Spot availability.
- [x] CRUD API for `Bookings` (`BookingsController`)
- [x] update `APIUtil` to work with bookings
- [x] test out API interaction in the console.
- [x] build out `BookingsIndex` component, which should allow users to see current bookings and approve/deny bookings.
- [x] build out `BookingsForm` component, which should allow users to see current availability and make bookings.
- [x] Style new elements

### Phase 8: Reviews (1.5 days)

**Objective:** Users can review Nap-Spots.

- [ ] create `Review` model.
- [ ] CRUD API for `Reviews` (`ReviewsController`)
- [ ] update `APIUtil` to work with Reviews
- [ ] test out API interaction in the console.
- [ ] build out `ReviewsIndex` component.
- [ ] build out `ReviewItem` component.
- [ ] Style new elements

### Phase 9: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [x] Modal login/registration
- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [x] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Instant-Book option on Nap-Spots
- [ ] Messaging between potential nappers and Nap-Spot owners
- [ ] Mini Guidebooks
- [ ] Nap/rental history

<!-- [phase-one]: .project-proposal/docs/phases/phase1.md
[phase-two]: .project-proposal/docs/phases/phase2.md
[phase-three]: .project-proposal/docs/phases/phase3.md
[phase-four]: .project-proposal/docs/phases/phase4.md
[phase-five]: .project-proposal/docs/phases/phase5.md -->
