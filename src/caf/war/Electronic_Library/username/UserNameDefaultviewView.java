/**
 * 
 */
package caf.war.Electronic_Library.username;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import com.webmethods.caf.faces.annotations.ExpireWithPageFlow;
import com.webmethods.caf.faces.annotations.DTManagedBean;
import com.webmethods.caf.faces.annotations.BeanType;

/**
 * @author DPOD
 *
 */

@ManagedBean(name = "UserNameDefaultviewView")
@SessionScoped
@ExpireWithPageFlow
@DTManagedBean(displayName = "UserName/default", beanType = BeanType.PAGE)
public class UserNameDefaultviewView  extends   com.webmethods.caf.faces.bean.BasePageBean {

	/**
	 * Determines if a de-serialized file is compatible with this class.
	 *
	 * Maintainers must change this value if and only if the new version
	 * of this class is not compatible with old versions. See Sun docs
	 * for <a href=http://java.sun.com/j2se/1.5.0/docs/guide/serialization/spec/version.html> 
	 * details. </a>
	 */
	private static final long serialVersionUID = 1L;
	private static final String[][] INITIALIZE_PROPERTY_BINDINGS = new String[][] {
	};
	private transient caf.war.Electronic_Library.username.UserName userName = null;
	private com.webmethods.caf.faces.data.dir.UserModel userModel = null;
	private static final String[][] USERMODEL_PROPERTY_BINDINGS = new String[][] {
	};
	private transient com.webmethods.caf.faces.data.object.ELPropertyContentProvider userNameDefaultviewViewProvider = null;
	private static final String[][] USERNAMEDEFAULTVIEWVIEWPROVIDER_PROPERTY_BINDINGS = new String[][] {
		{"#{UserNameDefaultviewViewProvider.object}", "#{UserNameDefaultviewView}"},
	};
	/**
	 * Initialize page
	 */
	public String initialize() {
		try {
		    resolveDataBinding(INITIALIZE_PROPERTY_BINDINGS, null, "initialize", true, false);
		} catch (Exception e) {
			error(e);
			log(e);
		}
		return null;	
	}

	public caf.war.Electronic_Library.username.UserName getUserName()  {
		if (userName == null) {
		    userName = (caf.war.Electronic_Library.username.UserName)resolveExpression("#{UserName}");
		}
		return userName;
	}

	public com.webmethods.caf.faces.data.dir.UserModel getUserModel()  {
		if (userModel == null) {
			userModel = new com.webmethods.caf.faces.data.dir.UserModel();
		}
	
	    resolveDataBinding(USERMODEL_PROPERTY_BINDINGS, userModel, "userModel", false, false);
		return userModel;
	}

	public void setUserModel(com.webmethods.caf.faces.data.dir.UserModel userModel)  {
		this.userModel = userModel;
	}

	public com.webmethods.caf.faces.data.object.ELPropertyContentProvider getUserNameDefaultviewViewProvider()  {
		if (userNameDefaultviewViewProvider == null) {
		    userNameDefaultviewViewProvider = (com.webmethods.caf.faces.data.object.ELPropertyContentProvider)resolveExpression("#{UserNameDefaultviewViewProvider}");
		}
	
	    resolveDataBinding(USERNAMEDEFAULTVIEWVIEWPROVIDER_PROPERTY_BINDINGS, userNameDefaultviewViewProvider, "userNameDefaultviewViewProvider", false, false);
		return userNameDefaultviewViewProvider;
	}
	
}