# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160609150054) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "nap_spots", force: :cascade do |t|
    t.string  "title",       null: false
    t.text    "description", null: false
    t.integer "owner_id",    null: false
    t.string  "category",    null: false
    t.string  "location",    null: false
    t.integer "price",       null: false
    t.string  "image_urls"
    t.integer "capacity"
    t.float   "lat"
    t.float   "lng"
  end

  add_index "nap_spots", ["category"], name: "index_nap_spots_on_category", using: :btree
  add_index "nap_spots", ["location"], name: "index_nap_spots_on_location", using: :btree
  add_index "nap_spots", ["owner_id"], name: "index_nap_spots_on_owner_id", using: :btree
  add_index "nap_spots", ["price"], name: "index_nap_spots_on_price", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "user_email",      null: false
    t.string "password_digest", null: false
    t.string "session_token",   null: false
    t.string "fname"
    t.string "lname"
    t.string "image_url"
    t.string "facebook_uid"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["user_email"], name: "index_users_on_user_email", unique: true, using: :btree

end
