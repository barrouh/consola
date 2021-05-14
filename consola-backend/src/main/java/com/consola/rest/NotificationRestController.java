package com.consola.rest;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.consola.model.Notification;
import com.consola.repositories.NotificationRepository;

@RestController
@RequestMapping("/api/notifications")
public class NotificationRestController {

	@Autowired
	private NotificationRepository notificationRepository;

	@GetMapping("")
	public ResponseEntity<Page<Notification>> notifications(
			@RequestParam(name = "pageSize", defaultValue = "10", required = false) Integer pageSize,
			@RequestParam(name = "pageIndex", defaultValue = "0", required = false) Integer pageIndex) {
		return new ResponseEntity<>(notificationRepository.findAll(PageRequest.of(pageIndex, pageSize)), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public Optional<Notification> notificationById(@PathVariable("id") int id) {
		return notificationRepository.findById(id);
	}

	@DeleteMapping("/{id}")
	public void deleteNotificationById(@PathVariable("id") int id) {
		notificationRepository.deleteById(id);
	}

}