import { relations } from "drizzle-orm/relations";
import { user, todos, profiles, session, groups, users_to_groups, countries, cities, posts, usersInNext_auth, users, authenticator, account } from "./schema";

export const todosRelations = relations(todos, ({one}) => ({
	user: one(user, {
		fields: [todos.author_id],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({one, many}) => ({
	todos: many(todos),
	profiles: many(profiles),
	sessions: many(session),
	group: one(groups, {
		fields: [user.group_id],
		references: [groups.id]
	}),
	users_to_groups: many(users_to_groups),
	posts: many(posts),
	authenticators: many(authenticator),
	accounts: many(account),
}));

export const profilesRelations = relations(profiles, ({one}) => ({
	user: one(user, {
		fields: [profiles.user_id],
		references: [user.id]
	}),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const groupsRelations = relations(groups, ({many}) => ({
	users: many(user),
	users_to_groups: many(users_to_groups),
}));

export const users_to_groupsRelations = relations(users_to_groups, ({one}) => ({
	group: one(groups, {
		fields: [users_to_groups.group_id],
		references: [groups.id]
	}),
	user: one(user, {
		fields: [users_to_groups.user_id],
		references: [user.id]
	}),
}));

export const citiesRelations = relations(cities, ({one}) => ({
	country: one(countries, {
		fields: [cities.country_id],
		references: [countries.id]
	}),
}));

export const countriesRelations = relations(countries, ({many}) => ({
	cities: many(cities),
}));

export const postsRelations = relations(posts, ({one}) => ({
	user: one(user, {
		fields: [posts.author_id],
		references: [user.id]
	}),
}));

export const usersRelations = relations(users, ({one}) => ({
	usersInNext_auth: one(usersInNext_auth, {
		fields: [users.id],
		references: [usersInNext_auth.id]
	}),
}));

export const usersInNext_authRelations = relations(usersInNext_auth, ({many}) => ({
	users: many(users),
}));

export const authenticatorRelations = relations(authenticator, ({one}) => ({
	user: one(user, {
		fields: [authenticator.userId],
		references: [user.id]
	}),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));