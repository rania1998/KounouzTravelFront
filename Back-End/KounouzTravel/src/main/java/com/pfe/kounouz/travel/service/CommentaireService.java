package com.pfe.kounouz.travel.service;

import java.util.List;

import com.pfe.kounouz.travel.entitie.Commentaire;

public interface CommentaireService {

	public void deleteCommentaire(Commentaire Commentaire);

	public List<Commentaire> findAllCommentaire();

	public Commentaire findOneCommentaire(Long id);

	public Commentaire saveCommentaire(Commentaire Commentaire);

}
