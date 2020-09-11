package com.pfe.kounouz.travel.srviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.kounouz.travel.entitie.Commentaire;
import com.pfe.kounouz.travel.repository.CommentaireRepository;
import com.pfe.kounouz.travel.service.CommentaireService;

@Service
public class CommentaireServiceIpml implements  CommentaireService{

	@Autowired
    CommentaireRepository CommentaireRepository ;
	
	public void deleteCommentaire(Commentaire Commentaire) {
		CommentaireRepository.delete(Commentaire);
		
	}

	
	public List<Commentaire> findAllCommentaire() {
		return CommentaireRepository.findAll();
	}

	
	public Commentaire findOneCommentaire(Long id) {
		return CommentaireRepository.findCommentaireById(id);
	}


	public Commentaire saveCommentaire(Commentaire Commentaire) {
		return  CommentaireRepository.save(Commentaire);
	}


	

}
