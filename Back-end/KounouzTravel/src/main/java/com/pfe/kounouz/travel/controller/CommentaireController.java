package com.pfe.kounouz.travel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pfe.kounouz.travel.entitie.Commentaire;
import com.pfe.kounouz.travel.service.CommentaireService;


@RequestMapping
@RestController
public class CommentaireController {
	

	@Autowired
	private CommentaireService  CommentaireService;

	@RequestMapping(value = "/Commentaire/CommentaireManager", method = RequestMethod.GET)
	public List<Commentaire> findAll() {
		return CommentaireService.findAllCommentaire();
	}

	@RequestMapping(value = "/Commentaire/CommentaireById/{id}", method = RequestMethod.GET)
	public Commentaire getCommentaireById(@PathVariable("id") Long id) {
		return CommentaireService.findOneCommentaire(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/Commentaire/deleteCommentaire")
	public void deleteUser(@RequestBody Commentaire Commentaire) {
		CommentaireService.deleteCommentaire(Commentaire);

	}

	@RequestMapping(method = RequestMethod.POST, value = "/Commentaire/saveCommentaire")
	public void saveCommentaire(@RequestBody Commentaire Commentaire) {
		CommentaireService.saveCommentaire(Commentaire);

	}

}
