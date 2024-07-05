package com.home.security;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

@Configuration
@EnableWebSecurity
//@EnableMethodSecurity
public class WebSecurityConfig {
	
	@Bean
	protected SecurityFilterChain filterChain(HttpSecurity http, HandlerMappingIntrospector introspector) throws Exception {
		MvcRequestMatcher.Builder mvcRequestMatcher = new MvcRequestMatcher.Builder(introspector);
		http.csrf(c -> c.disable());
		http.cors(c -> c.disable());
//		http.headers(head -> head.crossOriginEmbedderPolicy(c -> c.)
//				.frameOptions(frame -> frame
//						.disable()));
			http.authorizeHttpRequests(auth -> auth
					.requestMatchers(mvcRequestMatcher.pattern("/")).permitAll()
					.requestMatchers(mvcRequestMatcher.pattern("/**")).permitAll()
//					.requestMatchers(mvcRequestMatcher.pattern("/public/**")).permitAll()
//					.requestMatchers(mvcRequestMatcher.pattern("/welcome")).permitAll()
//					.requestMatchers(mvcRequestMatcher.pattern("/admin/**")).hasRole("ADMIN")
					.requestMatchers(PathRequest.toH2Console()).permitAll()
//					.requestMatchers(mvcRequestMatcher.pattern("/**")).hasAnyRole("ADMIN", "USER")
					);
			return http.build();
	}
}
