package com.pfe.kounouz.travel.srviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.kounouz.travel.entitie.ProcessInstance;
import com.pfe.kounouz.travel.service.ProcessInstanceService;
import com.pfe.kounouz.travel.repository.ProcessInstanceRepository;

@Service
public class ProcessInstanceServiceImpl implements  ProcessInstanceService{
	
	@Autowired  
	ProcessInstanceRepository ProcessInstanceRepository;

	
	public ProcessInstance findOneProcessInstance(Long id) {
		// TODO Auto-generated method stub
		return ProcessInstanceRepository.findProcessInstanceById(id);
	}

	
	public List<ProcessInstance> findAllProcessInstance() {
		// TODO Auto-generated method stub
		return ProcessInstanceRepository.findAll();
	}

	
	public ProcessInstance saveProcessInstance(ProcessInstance ProcessInstance) {
		// TODO Auto-generated method stub
		return ProcessInstanceRepository.save(ProcessInstance);
	}

	
	public void deleteProcessInstance(ProcessInstance ProcessInstance) {
		ProcessInstanceRepository.delete(ProcessInstance);
		
	}

}
