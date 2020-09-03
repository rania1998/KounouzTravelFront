package com.pfe.kounouz.travel.srviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.kounouz.travel.entitie.WorkflowConfig;
import com.pfe.kounouz.travel.repository.WorkflowConfigRepository;
import com.pfe.kounouz.travel.service.WorkflowConfigService;

@Service
public class WorkflowConfigServiceImpl implements WorkflowConfigService {
	
	@Autowired
	private WorkflowConfigRepository WorkflowConfigRepository;

	
	public WorkflowConfig findOneWorkflowConfig(Long id) {
		// TODO Auto-generated method stub
		return WorkflowConfigRepository.findWorkflowConfigById(id);
	}

	
	public List<WorkflowConfig> findAllWorkflowConfig() {
		// TODO Auto-generated method stub
		return WorkflowConfigRepository.findAll();
	}

	
	public WorkflowConfig saveWorkflowConfig(WorkflowConfig WorkflowConfig) {
		// TODO Auto-generated method stub
		return WorkflowConfigRepository.save(WorkflowConfig);
	}

	
	public void deleteWorkflowConfig(WorkflowConfig WorkflowConfig) {
		WorkflowConfigRepository.delete(WorkflowConfig);
		
	}
	

}


