package caf.war.Electronic_Library;

import java.util.Iterator;
import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

import com.softwareag.sbpm.providers.IPrincipalProvider;
import com.webmethods.caf.faces.annotations.ExpireWithPageFlow;
import com.webmethods.caf.faces.annotations.DTManagedBean;
import com.webmethods.caf.faces.annotations.BeanType;
import com.webmethods.caf.faces.data.dir.PrincipalModelFactory;
import com.webmethods.sc.directory.DirectorySystemFactory;
import com.webmethods.sc.directory.IDirectoryRole;
import com.webmethods.sc.directory.IDirectorySession;
import com.webmethods.sc.directory.IDirectorySystem;
import com.webmethods.sc.directory.IDirectoryUser;

@ManagedBean(name = "jaar")
@SessionScoped
@ExpireWithPageFlow
@DTManagedBean(beanType = BeanType.DEFAULT)
public class Jaar extends com.webmethods.caf.faces.bean.BaseFacesSessionBean {

	private java.lang.String name;
	private java.lang.String userRole;
	private java.lang.String email;
	/**
     * Override this method to release any resources associated with this session.
     * Please note, the FacesContext is not valid for this function 
     */
    protected void release() {
    
    }
    public Jaar(){
    	String user=(String) resolveExpression("#{mwsContext.userName}");
    	IDirectorySystem ds = DirectorySystemFactory.getDirectorySystem();
    	IDirectorySession session = ds.createSession();
    	IDirectoryUser username = (IDirectoryUser) session.lookupPrincipalByName(
                user, 0);
    	List roles = session.getRoleMembership(username.getID());
    	IDirectoryRole role;
    	Iterator i$=roles.iterator();
    	
    	role = (IDirectoryRole) i$.next();
    	
    	this.userRole = (String)role.getName();
    	//this.email = (String)role.getEmail();
    	
    	if(user != null)
		{
			//error("I ma here");
    		try{
    			this.name=PrincipalModelFactory.createPrincipalModelFromID(user).getDisplayName();
    			this.email=PrincipalModelFactory.createPrincipalModelFromID(user).getEmail();
    		}
    		catch(Exception e)
    		{
    			this.name="";
    		}
		}
    	
    }
public java.lang.String getRole()  {
		
		return userRole;
	}
public java.lang.String getEmail()  {
	
	return email;
}
	public java.lang.String getName()  {
		
		return name;
	}

	public void setName(java.lang.String name)  {
		this.name = name;
	};
}